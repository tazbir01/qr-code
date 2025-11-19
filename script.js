const handleGenerateCode = () => {
    const url = document.getElementById("url").value.trim()
    // trim() for white space remove 
    if (!url) {
        return alert("Provide  valid url")
    }
    document.getElementById("url").value = "";

    try{

        new QRCode(document.getElementById("QR-code"),{
            text: url,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff"
        })
    }
    catch(error){
        console.log(error)
    }
}