const GCP_BASE = "https://storage.googleapis.com/";
const IMG_BASE = GCP_BASE + "nectar-mosaic-public/images";

export default class NectarGuiUtils{
  static image(name){
    return name && `${IMG_BASE}/${name}`;
  }

  static name2emotion(status){
    switch ((status || '').toLowerCase()) {
      case('running'): return 'cool';
      case('broken'): return 'warning2';
      case('installing'): return 'innocent';
      default: return 'primaryColor';
    }
  }

  static findCrtIndex(routes, location, seekIndex){
    const parts = location.pathname.split('/');

    if(seekIndex == null)
      seekIndex = parts.length - 1;

    const interest = parts[seekIndex] || '';
    // console.log("For path " + parts);
    // console.log(`pargs[${seekIndex}] = ${interest}`);
    return routes.findIndex(r => `/${interest}` === r.path);
  }

}
