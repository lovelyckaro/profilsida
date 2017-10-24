from urllib.request import urlopen
from urllib.error import HTTPError

lines = []
nums = []

for i in range(1,10):
    nums.append("http://www.skolweb.varberg.se/psa00" + str(i))

for i in range(10, 99):
    try:
        urlopen("http://www.skolweb.varberg.se/psa0" + str(i))
        nums.append("http://www.skolweb.varberg.se/psa0" + str(i))
    except HTTPError as err:
        print(str(i) + " was unsuccessfull due to error: " + str(err.code))

for i in range(100, 411):
    try:
        urlopen("http://www.skolweb.varberg.se/psa" + str(i))
        nums.append("http://www.skolweb.varberg.se/psa" + str(i))
    except HTTPError as err:
        print(str(i) + " was unsuccessfull due to error: " + str(err.code))

       
with open("text.txt","w") as f:
    for line in nums:
        f.write(line + "\n")
print("The successful entries where: " + str(nums))
