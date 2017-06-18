function uploadImage() {
    console.log("uploadImage");
    var blobFile = $('#filechooser').files[0];
    console.log(blobFile);
    var formData = new FormData();
    formData.append("fileToUpload", blobFile);

    $.ajax({
       url: "localhost:5000/upload",
       type: "POST",
       data: fd,
       processData: false,
       contentType: false,
       success: function(response) {
           // .. do something
       },
       error: function(jqXHR, textStatus, errorMessage) {
           console.log(errorMessage); // Optional
       }
    });
}
