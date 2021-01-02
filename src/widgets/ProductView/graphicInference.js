import NectarGuiUtils from "../../utils/NectarGuiUtils";

export default function inferGraphic(type, value){
  if(type === 'clusterTypes'){
    let core = 'gke';
    if(value.toLowerCase().includes("gke"))
      core = 'gke';
    else if(value.toLowerCase().includes("eks"))
      core = 'eks';
    else if(value.toLowerCase().includes("aks"))
      core = 'aks';
    return {
      graphicType: 'image',
      graphicName: NectarGuiUtils.image(`k8s-flavors/${core}.png`)
    }
  }

  else if(type === 'clusterFeatures') {
    if (value.toLowerCase().includes("kubernetes")) {
      return {
        graphicType: "image",
        graphicName: NectarGuiUtils.image("k8s_style_light.png")
      };
    } else return { graphicType: "icon", graphicName: 'api' };
  }

  else if(type === 'softwareAndServices') {
    let core = null;
    if (value.toLowerCase().includes("prometheus"))
      core = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1920px-Prometheus_software_logo.svg.png';
    if (value.toLowerCase().includes("istio"))
      core = 'data:image/png;base64,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';
    if(core)
      return { graphicType: "image", graphicName: core };
    return { graphicType: "icon", graphicName: 'apps' };
  }

  else if(type === 'resources') {
    let graphicName = 'memory';
    if (value.toLowerCase().includes("disk"))
      graphicName = 'sd_storage';
    return { graphicType: "icon", graphicName };
  }

  else if(type === 'operation'){
    return {
      graphicType: "icon",
      graphicName: 'memory'
    };
  }

  return {
    graphicType: "icon",
    graphicName: 'memory'
  };
}
