/**
 * Created by jayde on 12/26/2016.
 */

import {DataSync} from './DataSync';
import * as utils from './../utility';


class User extends DataSync{
  constructor(){
    super('User');
    this.metaRef = null;
    this.get = null;
    this.push = null;
    this._firebase = window.firebase;
  }

  isAuthenticated(){
    return (typeof(this._firebase.auth().currentUser)==='object');
  }

  isAdmin(cb){
    this._firebase.database().ref('admins').once('value',function(snapshot){
      var data = snapshot.val();
      var e = !(!data[this._firebase.auth().currentUser.uid]);
      cb(e);
    }.bind(this))
  }

  loadUser(user) {
    if(user){
      this._firebase.database().ref().child('users').child(user.uid).once('value',function(snapshot){
        var data = {
          displayName: user.providerData[0].displayName,
          photoURL: user.providerData[0].photoURL,
          email: user.providerData[0].email,
          meta: null,
        };
        if(!snapshot.exists()){
          data = {
            displayName: user.providerData[0].displayName,
            photoURL: user.providerData[0].photoURL,
            email: user.providerData[0].email,
            meta: null,
          };
          this._firebase.database().ref().child('users').child(user.uid).set(data);
        }else{
          data = snapshot.val();
        }
        this.data = data;
        this._firebase.database().ref().child('users').child(user.uid).off()
        /**
         * setting up meta stuff
         */
        this.metaRef = this._firebase.database().ref().child('users').child(user.uid).child('meta');
        this.metaRef.off();
        var dataLayer = [data.meta];
        var helper = new DataLayerHelper(dataLayer, (message, model)=>{
          this.metaRef.update(model);
          helper.flatten();
          this.data.meta = helper.a;
          this.sync();
          this.emit('updated');
        });
        this.get = function(key){
          return helper.get(key);
        };
        this.push = function(data){
          dataLayer.push(data);
        };
        /***********************************
         *
         */
        var onlineStatus = (function(root,user){
          var userRef = root._firebase.database().ref('users').child(user.uid);
          var onlineRef = root._firebase.database().ref('onlineUsers/'+user.uid);
          root._firebase.database().ref('/.info/connected').on('value',function(snapshot){
            if(snapshot.exists()){
              onlineRef.onDisconnect().remove();
              onlineRef.set({id:user.uid,data:user.providerData[0]});
              userRef.onDisconnect().update({online:false,lastSeen:firebase.database.ServerValue.TIMESTAMP});
              userRef.update({online:true});
            }
          })
        })(this,user);
      }.bind(this));
    }else{
      this.emit('NotAuthenticated');
    }
  }

}