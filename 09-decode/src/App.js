import "./App.css";
import { useJwt } from "react-jwt";

function App() {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzbmFwcGZvb2RfcHdhIiwiZXhwIjoxNzQyMTE5NjA1LCJpYXQiOjE3NDIxMTU4ODUsImp0aSI6IjZhYWEyNzQwLTExMjEtNDkyYy1iMTQ5LWE0Yjc1NjI5NDY4ZSIsImt5YyI6MCwibmJmIjoxNzQyMTE1ODg1LCJzY29wZXMiOlsibW9iaWxlX3YyIiwibW9iaWxlX3YxIiwid2VidmlldyJdLCJzZXNzaW9uIjp7ImlkIjoiN2QxM2I3NzgtMzYzYi00Yzk5LTg2YjctMzdkMGRiMDg3NjBhLW5uNGwyZ3oiLCJpc3N1ZWRfYXQiOiIyMDI1LTAzLTE2VDEyOjM2OjQ1LjYyNDYwNDA5NCswMzozMCIsInNvdXJjZSI6Im90cCIsInVzZXJfYWdlbnQiOiJYMTEgLSAgLSBMaW51eCB4ODZfNjQgLSBDaHJvbWUgMTM0LjAuMC4wIn0sInN1YiI6IjA5MzgwMTc1MzY5OmZjMTc1MjE0MjBkYmJiMjFmZDRmZmU2MDk0ZjVmNTkyIiwic3Vic2lkeSI6MCwidWRpZCI6IjdkMTNiNzc4LTM2M2ItNGM5OS04NmI3LTM3ZDBkYjA4NzYwYSIsInVpZCI6IjE3NTFkODQ3LTU5OTktNDUyNy1iMTU3LTlmNTYyMGQzOWY3YiIsInVzZXJDb2RlIjoibm40bDJneiJ9.BdBVL2eNeYYdaLGtFllWGn2p-RBr8z6F6ESzIT77RwIzy2ZjTo7HgpMyZ2KD-HcZZ2kPsTM3CW4QSYVxpJko77o3Ht3PD7hVamgJZHbO-oHTN5xQy5Z8lLTJogryEMjWIyR9xX0Xgr3M7Ikp2RsqPkS6Ks3Jll-TQLDompiCjR4xCdq2J5lRTVJaXyfP4UtnTH5tZHhov-ZXVeT8IksLX7zNVli7h3w6GJZXvaDoiJP6iMgBmgMM_5VGv7_oceAh4PhhTBtq41EI-VPcvZaNaT2RO73vVzTM0YhlfisOodIPtDxpCEEfT6rnHAXSdAZeldbHbQ1-BCzkJj8t19yo8A";
  const { decodedToken, isExpired } = useJwt(token);

  console.log(decodedToken);
}

export default App;
