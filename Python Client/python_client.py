import httplib
import urllib2
import cv2
import time
import numpy as np

# Create the connection.


while 1:    
    # enter the ip address and port number as an argument to urlopen as:
    # http://ipaddress:portnumber
    connection = urllib2.urlopen("http://10.16.4.42:1069")
    result = connection.read()
    imagetoshow = result.decode('base64')
    nparr = np.fromstring(imagetoshow, np.uint8)
    if nparr.size != 0:
        img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        cv2.imshow("result", img_np)
        cv2.waitKey(1)            
	connection.close()