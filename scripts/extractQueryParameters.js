/**
 * In google forms, on the preview page, run this script in the developer console to get query parameters
 * that can be used to POST to the form
 */
function loop(e) {
  if (e.children)
    for (let i = 0; i < e.children.length; i++) {
      let params = e.children[i].getAttribute('data-params');
      if (params) {
        params = params.substring(4);
        params = params.split(',');
        console.log(params[1] + ': entry.' + params[4].substring(2));
      }
      loop(e.children[i]);
    }
}

loop(document.body);