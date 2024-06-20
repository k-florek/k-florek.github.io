#!/usr/bin/env python3

import os,sys
import qrcode
import argparse
import qrcode.image.svg
from qrcode.image.styles.moduledrawers.svg import SvgPathCircleDrawer, SvgPathSquareDrawer


parser = argparse.ArgumentParser(description=f"",usage="generateQR.py",add_help=True)
parser.add_argument("url", help="URL to encode in the QR Code")
parser.add_argument("output_path", help="QR Code svg output path and name")

args = parser.parse_args()

qrData = args.url

outPath = args.output_path

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_Q,
    box_size=10,
    border=4
)
qr.add_data(qrData)
qr.make(fit=True)
imgFactory = qrcode.image.svg.SvgPathImage
imgFactory.QR_PATH_STYLE = {
        "fill": "#2a76dd",
        "fill-opacity": "1",
        "fill-rule": "nonzero",
        "stroke": "none",
    }
#imgFactory.background="#000000"
img = qr.make_image(
    image_factory=imgFactory, 
    module_drawer=SvgPathSquareDrawer()
)
img.save(outPath)