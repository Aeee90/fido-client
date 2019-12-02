<template>
  <div class="login-body">
    <div id="wrap1"></div>
    <div id="wrap2"></div>
    <div class="wrapper-box">
      <p class="login-title">Project Nautilus </p>
      <label>User Name<input type="text" name="userName" placeholder="example_username"/></label><br/>
      <label>Attenstaion Type<select name="attType">
          <option value="none" selected>None</option>
          <option value="indirect">Indirect</option>
          <option value="direct">Direct</option>
        </select>
      </label><br/>
      <label>Authentictor Type<select name="authType">
          <option value="unspecified" selected>Unspecified</option>
          <option value="cross-platform">Cross platform</option>
          <option value="platform">Platform (TPM)</option>
        </select>
      </label><br/>
      <label>User Verification<select name="userVerification">
          <option value="discouraged" selected>Discouraged</option>
          <option value="preferred">Preferred</option>
        </select>
      </label><br/>
      <label>Register with Resident Key<select name="residentKeyRequirement">
          <option value="false" selected>Not Required</option>
          <option value="true">Required</option>
        </select>
      </label><br/>
      <label>txAuthSimple Extension<input type="text" name="txAuthExtension"></label><br/>
      <button type="button" class="btn-send" v-on:click="getPublicKeyCredentialCreationOptions">Register</button>
      <p class="login-copyright">
        CREATED BY Siena Republic<br/>
        COPYRIGHT @ 2019 PL. ALL RIGHTS RESERVED.</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios/index'

  const state = {
    createResponse: null
    , publicKeyCredential: null
    , credential: null
    , userName: ""
  };

  const makeCredential = function(){

  };

  export default {
    name: 'Login',
    data: function() {
      return  {
        createResponse: null
        , publicKeyCredential: null
        , credential: null
        , userName: ""
      }
    }
    , methods: {
      getPublicKeyCredentialCreationOptions: function () {
        axios.get('http://localhost:4000/webauth/credential/sps1122')
          .then(function (response) {
            console.log(response)
          }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  input, button {
    outline: none;
  }
  ::placeholder {
    color: #e2e2e2
  }

  #wrap1 {
    width: 100%;
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    position: fixed;
    left: 0;
    top:0;
    background: url("../assets/main.png") no-repeat;
    background-size: cover;
  }

  #wrap2 {
    width: 100%;
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    position: fixed;
    left: 0;
    top:0;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: BackgroundGradient 15s ease infinite;
    opacity: 0.85;
  }

  .wrapper-box {
    width: 500px;
    position: absolute;
    margin: 0 0 0 -250px;
    left: 50%;
  }

  .login-title {
    text-align: center;
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 60px
  }

  .wrapper-box > label {
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    margin: 0 0 60px 5%;
  }

  .wrapper-box > input, .wrapper-box > label > select, .wrapper-box > label > input {
    color: #ffffff;
    font-size: 20px;
    width: 80%;
    padding: 0;
    border: 0;
    margin: 0 0 40px 15%;
    height: 40px;
    background: none;
    border-bottom: 1px solid #fff;
  }

  @keyframes BackgroundGradient {
    0% {background-position: 0% 50%}
    50% {background-position: 100% 50%}
    100% {background-position: 0% 50%}
  }

  .btn-send {
    width: 90%;
    margin: 15px 0 0 5%;
    height: 50px;
    font-size: 20px;
    background: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    border:1px solid #ffffff;
  }

  .btn-send:hover {
    background: #ffffff;
    color:#666666;
    border:0;
    transition: 0.5s;
  }

  .login-copyright {
    color: #ffffff;
    font-size: 11px;
    word-spacing: 3px;
    margin-top: 20px;
    text-align: center
  }
</style>
