window.csrf = function(token) {
  return $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (settings.type === "GET") {
        return;
      }
      if (token) {
        return xhr.setRequestHeader('X-CSRF-Token', token);
      }
    }
  });
};

$(function() {
  return window.csrf($('meta[name="csrf-token"]').attr('content'));
});
