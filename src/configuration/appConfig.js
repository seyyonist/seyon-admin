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