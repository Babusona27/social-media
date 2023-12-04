import { Box, Button, FormControlLabel, TextField, Typography, } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { MenuBook } from '@mui/icons-material'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';
import WorkIcon from '@mui/icons-material/Work';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import axios from 'axios';
import { UPDATE_PROFILE } from '../Url';
import { useDispatch } from 'react-redux';
import { userDetails } from '../redux/reducers/UserReducer';
const EducationandWork = () => {
  const userData = useSelector((state) => state.UserReducer.value);
  // console.log("userData_education", userData);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [formData, setFormData] = useState({
    companyName: userData.user.company_city,
    designation: userData.user.designation,
    workDescription: userData.user.work_description,
  });
  const [errors, setErrors] = useState({
    companyName: "",
    designation: "",
  });
  const handleInputUpdate = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.companyName) {
      isValid = false;
      newErrors.companyName = "Company name is required";
    }
    if (!formData.designation) {
      isValid = false;
      newErrors.designation = "Designation is required";
    }
    setErrors(newErrors);
    if (isValid) {
      axios
        .put(UPDATE_PROFILE, formData, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.status === true) {
              setMessageType("success");
              setMessage(response.data.message);

              userData.user.designation = response.data.data.designation;
              // console.log("userData", userData);
              dispatch(userDetails(userData));
          } else {
              setMessageType("error");
              setMessage(response.data.message);
          }

        })
        .catch((err) => {
          console.log(err.response);
          if (err.response) {
            setMessageType("error");
            setMessage(err.response.data.message);
          }
        });
    }
  }
  return (
    <>
      <Box sx={{
        marginBottom: "20px",
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: `1px solid ${theme.palette.primary.Gray}`,
          paddingBottom: "10px",
          marginBottom: "10px",
        }}>
          <WorkIcon sx={{
            fontSize: "24px",
            color: theme.palette.primary.LogoColor,
            marginRight: "10px",
          }} />
          <Typography component={"h4"} sx={{
            fontSize: "22px",
            fontWeight: "600",
            color: theme.palette.primary.LogoColor,
          }}
          >
            Work Experiences
          </Typography>
        </Box>
        <Box sx={{
          borderBottom: `1px solid ${theme.palette.primary.Gray}`,
          paddingBottom: "10px",
          marginBottom: "10px",
        }}>
          <Typography component={"p"} sx={{
            fontSize: "15px",
            fontWeight: "400",
            color: theme.palette.primary.ParaColor,
            textAlign: "left",
          }}
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <TextField
            sx={{
              padding: "0",
            }}
            className="profile_input"
            fullWidth
            disabled
            placeholder="Company"
            variant="outlined"
            name="companyName"
            size="small"
            value={formData.companyName}
            onChange={handleInputUpdate}
          />
          <TextField
            sx={{
              padding: "0",

            }}
            className="profile_input"
            fullWidth
            placeholder="Designation"
            variant="outlined"
            name="designation"
            size="small"
            value={formData.designation}
            onChange={handleInputUpdate}
          />
          <Box sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}>
            <TextField
              sx={{
                padding: "0",
                flex: "1",
              }}
              className="profile_input"
              fullWidth
              placeholder="From"
              variant="outlined"
              name="form"
              size="small"
            />
            <TextField
              sx={{
                padding: "0",
                flex: "1",
              }}
              className="profile_input"
              fullWidth
              placeholder="To"
              variant="outlined"
              name="to"
              size="small"

            />
          </Box>
          <TextField
            sx={{
              padding: "0",
            }}
            className="profile_input"
            fullWidth
            placeholder="City/Town"
            variant="outlined"
            name="to"
            size="small"

          />
          {/* <TextareaAutosize minRows={3} aria-label="empty textarea" placeholder="Description" /> */}
          <TextareaAutosize minRows={3} aria-label="empty textarea" placeholder="Work Description" value={formData.workDescription} name='workDescription' onChange={handleInputUpdate} />
          <Button
            sx={{
              color: theme.palette.primary.White,
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "1px",
              textTransform: "capitalize",
              background: theme.palette.primary.deepBlue,
              borderRadius: "5px",
              padding: "7px 0",
              minHeight: "40px",
              "&:hover": {
                background: theme.palette.primary.White,
                color: theme.palette.primary.deepBlue,
              },
            }}
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </>
  )
}
const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    font-family: ${theme.palette.primary.MainFont1};
    font-size:14px;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 4px;
    color: ${theme.palette.secondary.InputColor};
    background: transparent;
    border: 1px solid ${theme.palette.secondary.InputColor};
    box-shadow: none;
  
    &:hover {
      border-color: ${theme.palette.primary.LogoColor};
    }
  
    &:focus {
      border-color: ${theme.palette.primary.LogoColor};
      border-width: 1px;
      outline: 0;
      box-shadow: none;
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);
export default EducationandWork