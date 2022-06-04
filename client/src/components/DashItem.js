import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Typography, Box, FormControl } from "@material-ui/core";
import { Lock, Save } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({});

let subject1;
let subject2;
let subject3;
let selsem;
const DashItem = ({selectedSemester}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  function Submit_Pe(e){

    e.preventDefault();

    if(selectedSemester.spe === 5)
    {
      // When a post request is sent to the create url, we'll add a new record to the database.
    const newStudent = { 
      "subject1": subject1,
      "subject2": subject2,
      "subject3": subject3,
    }
    fetch("http://localhost:5000/record/add/sem5pe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    }

    if(selectedSemester.spe == 6)
      if(selectedSemester.pe == 1)
      {
        {
          const newStudent = { 
            "peSubject1": subject1,
            "peSubject2": subject2,
            "peSubject3": subject3,
          };
      
           fetch("http://localhost:5000/record/add/sem6pe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
    
        }
      }

      else if(selectedSemester.pe < 1)
      {
        {
          const newStudent = { 
            "oeSubject1": subject1,
            "oeSubject2": subject2,
            "oeSubject3": subject3,
          };
      
           fetch("http://localhost:5000/record/add/sem6oe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
    
      }
    
    }
    
  }

  if(selectedSemester.spe == 7)
  {
    {
      const newStudent = { 
        "pe1Subject1": subject1,
        "pe1Subject2": subject2,
        "pe1Subject3": subject3,
      
      };
  
       fetch("http://localhost:5000/record/add/sem7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      })
      .catch(error => {
        window.alert(error);
        return;
      });

  }

  if(selectedSemester.spe == 8)
  {
    if(selectedSemester.pe == 1)
    {
      {
        const newStudent = { 
          "pe3Subject1": subject1,
          "pe3Subject2": subject2,
          "pe3Subject3": subject3,
        };
    
       fetch("http://localhost:5000/record/add/sem8pe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
  
      }
    }

    else if(selectedSemester.pe < 1)
    {
      {
        const newStudent = { 
          "oe1subject1": subject1,
          "oe1subject2": subject2,
          "oe1subject3": subject3,
        };
    
         fetch("http://localhost:5000/record/add/sem8oe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
  }
}


  } 
  navigate("./")
}

  return (
    <Box
      bgcolor="background.paper"
      p={1}
      style={{
        width: "50%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          style={{ textAlign: "center", fontWeight: 700, marginBottom: 20 }}
          variant="h2"
          component="h2"
        >
         {selectedSemester.name}
        </Typography>
        <Typography
          style={{ textAlign: "center" }}
          variant="body1"
          component="body1"
        >
          Window opened at : 07-04-2022 11:00 AM
        </Typography>
        <Typography
          style={{ textAlign: "center" }}
          variant="body1"
          component="body1"
        >
          Window opened at : 07-04-2022 11:00 AM
        </Typography>
        <Typography
          style={{ textAlign: "center",color: "green" }}
          variant="body1"
          component="body1"
        >
          Last Locked at : 07-04-2022 07:00 PM
        </Typography>
        {selectedSemester.pe<1 && selectedSemester.spe==6 && (
       <Typography
       style={{
         textAlign: "center",
         fontWeight: 600,
         marginBottom: 20,
         marginTop: 20,
       }}
       variant="h4"
       component="h4"
     >
       Open Elective 
     </Typography>
    
   )}
   {selectedSemester.pe>0 &&  (
       
       <Typography
       style={{
         textAlign: "center",
         fontWeight: 600,
         marginBottom: 20,
         marginTop: 20,
       }}
       variant="h4"
       component="h4"
     >
       Professional Elective
     </Typography>
    
   )}
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl
            style={{
              marginTop: 8,
              marginBottom: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                fontWeight: 600,
                marginBottom: 20,
                marginTop: 20,
              }}
              variant="h6"
              component="h6"
            >
              Priority 1
            </Typography>
            <Input
              onChange={(event) => {
                subject1 = event.target.value;
              }}
              style={{ width: "70%" }}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl
            style={{
              marginTop: 8,
              marginBottom: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                fontWeight: 600,
                marginBottom: 20,
                marginTop: 20,
              }}
              variant="h6"
              component="h6"
            >
              Priority 2
            </Typography>
            <Input
              onChange={(event) => {
              // console.log(event.target.value);
                subject2 = event.target.value;
              }}
              style={{ width: "70%" }}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl
            style={{
              marginTop: 8,
              marginBottom: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                fontWeight: 600,
                marginBottom: 20,
                marginTop: 20,
              }}
              variant="h6"
              component="h6"
            >
              Priority 3
            </Typography>
            <Input
              onChange={(event) => {
                subject3 = event.target.value;
              }}
              style={{ width: "70%" }}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Button
              style={{
                marginTop: 8,
                marginBottom: 8,
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="contained"
              color="primary"
            >
              <Lock />
              <Typography
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: 5,
                }}
                variant="body1"
                component="body1"
              >
                Lock
              </Typography>
            </Button>
            <Button
              onClick={Submit_Pe}
              style={{
                marginTop: 8,
                marginBottom: 8,
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="contained"
              color="primary"
            >
              <Save />
              <Typography
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: 5,
                }}
                variant="body1"
                component="body1"
              >
                Save
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

{/* function Submit_Pe(e){

    e.preventDefault();

    if(selectedSemester.spe == 5)
    {
      // When a post request is sent to the create url, we'll add a new record to the database.
    const newStudent = { 
      "subject1": subject1,
      "subject2": subject2,
      "subject3": subject3,
    }
    fetch("http://localhost:5000/record/add/sem5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    }

    if(selectedSemester.spe == 6)
      if(selectedSemester.pe == 1)
      {
        {
          const newStudent = { 
            "subject1": subject1,
            "subject2": subject2,
            "subject3": subject3,
          };
      
           fetch("http://localhost:5000/record/add/sem6pe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
    
        }
      }

      else if(selectedSemester.pe < 1)
      {
        {
          const newStudent = { 
            "subject1": subject1,
            "subject2": subject2,
            "subject3": subject3,
          };
      
           fetch("http://localhost:5000/record/add/sem6oe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
    
      }
    
    }
    
  }

  if(selectedSemester.spe == 7)
  {
    {
      const newStudent = { 
        "subject1": subject1,
        "subject2": subject2,
        "subject3": subject3,
      
      };
  
       fetch("http://localhost:5000/record/add/sem7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      })
      .catch(error => {
        window.alert(error);
        return;
      });

  }

  if(selectedSemester.spe == 8)
  {
    if(selectedSemester.pe == 1)
    {
      {
        const newStudent = { 
          "subject1": subject1,
          "subject2": subject2,
          "subject3": subject3,
        };
    
        await fetch("http://localhost:5000/record/add/sem8pe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
  
      }
    }

    else if(selectedSemester.pe < 1)
    {
      {
        const newStudent = { 
          "subject1": subject1,
          "subject2": subject2,
          "subject3": subject3,
        };
    
        await fetch("http://localhost:5000/record/add/sem8oe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
  }
}


  } 
} */}
// let name1='mukund'
// async function fdata() {
//   let name1='mukund'
//   const newStudent = { 
//     "name":name1,
//   };
//   await fetch("http://localhost:5000/record/name", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newStudent),
//       })
//       .catch(error => {
//         window.alert(error);
//         return;
//       });

//     }     
export default DashItem;
