document.write('<div class="wrapper">');
    for (i = 0; i < 8; i++) {
        document.write('<div class="row">');
        if (i%2==0) {
            for (j = 0; j < 8; j++) {
                if (j%2==0) {
                    document.write('<div class="column"></div>');
                }
                else {
                    document.write('<div class="columnWhite"></div>');
                }
            }
        }
        else {
            for (j = 0; j < 8; j++) {
                if (j%2==1) {
                    document.write('<div class="column"></div>');
                }
                else {
                    document.write('<div class="columnWhite"></div>');
                }
            }
        }
        document.write('</div>');
    }
document.write('</div>');
