# QUIZ 2021

## USAGE
**1. Clone the project**    
**2.`yarn`(recommended) or `npm i`**  
**3. `yarn start` or `npm run start`**  

## REQUESTS
### GET **/api/question** `getting question by question id with answer options`
**body:** 
```
{
  questionId: number
}
```  
**successful response:**  
```
{
 id: number,
 title: string,
 answers: Array<{
   id: number,
   text: string,
 }>
}
```
**errors**  
**400**: Bad Request, check request params in body  
**404**: Not Found, params are correct, but question is not found or does`nt exist  
**500**: Internal Server Error  

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
```
**errors**  
**400**: Bad Request, check request params in body  
**404**: Not Found, params are correct, but question/answer is not found or does`nt exist  
**500**: Internal Server Error  
