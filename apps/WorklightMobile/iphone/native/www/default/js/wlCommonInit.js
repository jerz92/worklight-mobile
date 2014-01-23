
/* JavaScript content from js/wlCommonInit.js in folder common */
/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

function wlCommonInit() {
    loadFeeds();
}

function barcodeScan() {
    $('#mydiv').html('');
    window.plugins.barcodeScanner.scan(

    function(result) {
        $('#mydiv').html('Barcode: ' + result.text);
    });
}