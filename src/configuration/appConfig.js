let backendHost;

const hostname = window && window.location && window.location.hostname;
console.log("HostName:"+hostname)
if(hostname === 'localhost') {
  backendHost = 'http://localhost:8020';
}else{
  backendHost = '';
}
console.log("backendHost:"+backendHost)
export const API_ROOT=backendHost;

const oauthDetails={
  client_id:"165388735281-2tg16ked6s5nblgjehbntb2a40rup4qf.apps.googleusercontent.com",
  url:"https://accounts.google.com/o/oauth2/v2/auth",

}

export const OAUTH_DDETAILS=oauthDetails