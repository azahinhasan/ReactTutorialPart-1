import os
from time import sleep



os.system('cmd /k "git add ."')
os.system('cmd /k "git commit -m "part-1""')
sleep(2)
os.system('cmd /k "git push."')
print("done")