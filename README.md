# Vitra.ai Assignment

Page 1 : The UI should have a Slider (range $1000 to $4000). Depending on the range I select in the slider, it should display a list of people whose Balance is in that range.
Page 2 : Show a list of friends for people who are not active (isActive: false) and whose Balance is less than $2000.

## Description

I have use Reactjs for Frontend. App is main Component in which I am rendering components Page-1 and Page-2. Data is inside source folder named as people.json. 

Page-1 Component : I have used functional component. I am storing value of slider using useState hook. And on the basis of value, data of people is being filtered. Then filtered data is displayed using map function.

Page-2 Component : Same as Page 1 Component. But data is filtered if user is inactive and balance is less than $2000. For displaying friends of users, I am again mapping through their list of friends. 

