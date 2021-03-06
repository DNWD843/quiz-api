# QUIZ 2021 - API

## Installation
**1. Clone the project**    
**2.`yarn`(recommended) or `npm i`**  
**3. `yarn start` or `npm run start`**  

## Usage
### Requests
### GET **/api/question** `getting question by question-id with answer options`
**query:** 
```
{
  questionId: number
}
```  
**successful response:**  
```
{
  [key: number]: {
    id: number,
    title: string,
    answers: Array<{
      id: number,
      text: string,
    }>
  }
}                  
```
**errors**  
**400**: Bad Request
**404**: Not Found, params are correct, but question is not found or does`nt exist  
**500**: Internal Server Error  
***

### POST **/api/question** `getting question with the details of the answers`
**body:** 
```
{
  questionId: number,
  answerId: number,
}
```  
**successful response:**
```
{
  [key: number]: {
    id: number,
    title: string,
    answers: Array<{
      id: number,
      text: string,
      isCorrect: boolean,
      comment: string,
      percent: number,
    }>
  }
}  
```
**errors**  
**400**: Bad Request
**404**: Not Found, params are correct, but question/answer is not found or does`nt exist  
**500**: Internal Server Error  
***
### GET **/api/result** `getting result message`
**query:**
```
{
  correctAnswersCounter: number
}
```  
**successful response:**
```
{
 title: string,
 text: string,
}
```
**errors**  
**400**: Bad Request  
**500**: Internal Server Error  
