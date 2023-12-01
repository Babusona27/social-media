import { PlaylistAddCheck } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography, InputLabel } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText';
import React, { useState } from 'react'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import theme from '../Theme'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux';

const BasicInformationDetails = () => {
    const userData = useSelector((state) => state.UserReducer.value);
    console.log("userData_basicInfo", userData);
    let nameParts = userData.user.name.split(' ');
    let firstName = nameParts[0];
    let lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
    const [selectedValue, setSelectedValue] = useState('');
    const [bday, setBday] = useState(null);
    const [bmonth, setBmonth] = useState(null);
    const [byear, setByear] = useState(null);

    // Create a new Date object from the date of birth
    let dob = new Date(userData.user.dob);

    // Extract the day, month, and year
    let day = dob.getDate();
    let month = dob.getMonth() + 1; // getMonth() returns a zero-based month, so add 1
    let year = dob.getFullYear();
    console.log("day", day, "month", month, "year", year);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "10px",
            }}>
                <PlaylistAddCheck sx={{
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
                    Edit basic information
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

            {userData &&
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "20px",
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                    }}>
                        <TextField
                            sx={{
                                padding: "0",

                            }}
                            fullWidth
                            className="profile_input"
                            placeholder="First Name"
                            variant="outlined"
                            name="name"
                            size="small"
                            value={firstName}
                        />

                        <TextField
                            sx={{
                                padding: "0",
                            }}
                            className="profile_input"
                            fullWidth
                            placeholder="Last Name"
                            variant="outlined"
                            name="form"
                            size="small"
                            value={lastName}
                        />

                    </Box>

                    <TextField
                        sx={{
                            padding: "0",
                        }}
                        className="profile_input"
                        fullWidth
                        placeholder="My email"
                        type="email"
                        variant="outlined"
                        name="to"
                        size="small"
                        value={userData.user.email}

                    />
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}>
                        <FormControl className="form_imput" fullWidth>
                            {/* <InputLabel id="gender-label">Date</InputLabel> */}
                            <Select
                                sx={{
                                    padding: "0",
                                    textAlign: "left",
                                }}
                                labelId="gender-label"
                                label="Date"
                                // placeholder="Date"
                                value={day}
                                // defaultValue="Date"
                                onChange={(e) => setBday(e.target.value)}
                            >
                                <MenuItem value="" disabled>Date</MenuItem>
                                <MenuItem value={"1"}>1</MenuItem>
                                <MenuItem value={"2"}>2</MenuItem>
                                <MenuItem value={"3"}>3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="form_imput" fullWidth>
                            <Select
                                sx={{
                                    padding: "0",
                                    textAlign: "left",
                                }}
                                labelId="gender-label"
                                placeholder="Month"
                            //   value={gender}
                            //   defaultValue="Gender"
                            //   onChange={(e) => setGender(e.target.value)}
                            >
                                <MenuItem value={"Jan"}>Jan</MenuItem>
                                <MenuItem value={"Feb"}>Feb</MenuItem>
                                <MenuItem value={"Mar"}>Mar</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="form_imput" fullWidth>
                            <Select
                                sx={{
                                    padding: "0",
                                    textAlign: "left",
                                }}
                                id="select"
                                labelId="gender-label"
                                value={selectedValue}
                                onChange={handleChange}
                            //   defaultValue="Gender"
                            //   onChange={(e) => setGender(e.target.value)}
                            >
                                <MenuItem value="">Year</MenuItem>
                                <MenuItem value={"1995"}>1995</MenuItem>
                                <MenuItem value={"1996"}>1996</MenuItem>
                                <MenuItem value={"1996"}>1996</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >

                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>

                   
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}>
                        <TextField
                            sx={{
                                padding: "0",
                                flex: "1",
                            }}
                            className="profile_input"
                            fullWidth
                            placeholder="Enter a password"
                            variant="outlined"
                            name="city"
                        // value={formData.password}
                        // onChange={handleInputChange}
                        // error={Boolean(errors.password)}
                        // helperText={errors.password}
                        />
                        <FormControl className="form_imput" fullWidth sx={{
                            flex: "1",
                        }}>
                            <Select
                                sx={{
                                    padding: "0",
                                    textAlign: "left",
                                }}
                                labelId="gender-label"
                                value=""
                            //   defaultValue="Gender"
                            //   onChange={(e) => setGender(e.target.value)}
                            >
                                <MenuItem value="">Year</MenuItem>
                                <MenuItem value={"1995"}>1995</MenuItem>
                                <MenuItem value={"1996"}>1996</MenuItem>
                                <MenuItem value={"1996"}>1996</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextareaAutosize minRows={3} aria-label="empty textarea" placeholder="Description" />
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
                    >
                        Save Changes
                    </Button>
                </Box>
            }


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
export default BasicInformationDetails