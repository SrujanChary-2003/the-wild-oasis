word= input()
word = word[3::2]
count=0
for i in word:
    if i == i.lower():
        count= count+1
print(count)