#!/usr/bin/env python3

import os,sys
import qrcode
import qrcode.image.svg
from qrcode.image.styles.moduledrawers.svg import SvgPathCircleDrawer


path = sys.argv[1]
cwd = os.getcwd()

try:
    path = os.path.abspath(path)
    path = path.split('k-florek.github.io')[1]
except IndexError:
    print("Error: Please provide a path within the project.")
    sys.exit(1)

qrData = 'https://k-florek.net'+path

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_Q,
    box_size=100,
    border=4
)
qr.add_data(qrData)
qr.make(fit=True)
imgFactory = qrcode.image.svg.SvgPathImage
imgFactory.QR_PATH_STYLE = {
        "fill": "#FF00FF",
        "fill-opacity": "1",
        "fill-rule": "nonzero",
        "stroke": "none",
    }
imgFactory.background="#000000"
img = qr.make_image(
    image_factory=imgFactory, 
    module_drawer=SvgPathCircleDrawer()
)
img.save(os.path.join(cwd,"qr.svg"))