import { PlaylistAddCheck } from '@mui/icons-material'
import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const BasicInformationDetails = () => {
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
                    fontSize: "20px",
                    fontWeight: "500",
                    color: theme.palette.primary.ParaColor,
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
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "20px",
              }}
            //   onSubmit={handleSubmit}
            >
              <TextField
                sx={{
                  padding: "0",
                }}
                className="profile_input"
                fullWidth
                placeholder="Enter name"
                // label="Enter name"
                variant="outlined"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                // error={Boolean(errors.name)}
                // helperText={errors.name}
              />

              <TextField
                sx={{
                  padding: "0",
                }}
                className="profile_input"
                fullWidth
                placeholder="Enter email"
                // label="Enter email"
                variant="outlined"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                // error={Boolean(errors.email)}
                // helperText={errors.email}
              />

              <TextField
                sx={{
                  padding: "0",
                }}
                className="profile_input"
                fullWidth
                type="phone"
                placeholder="Enter phone number"
                // label="Enter phone number"
                variant="outlined"
                name="phone"
                // value={formData.phone}
                // onChange={handleInputChange}
                // error={Boolean(errors.phone)}
                // helperText={errors.phone}
              />
              <TextField
                sx={{
                  padding: "0",
                  color: theme.palette.primary.White,
                }}
                className="profile_input"
                fullWidth
                type="date"
                placeholder="Enter date of birth"
                variant="outlined"
                // defaultValue={formData.dob}
                // name="date"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                
              />
              <FormControl className="profile_input">
                <Select
                  sx={{
                    padding: "0",
                    textAlign: "left",
                  }}
                  labelId="gender-label"
                  placeholder="Gender"
                //   value={gender}
                //   defaultValue="Gender"
                //   onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{
                  padding: "0",
                }}
                className="profile_input"
                fullWidth
                placeholder="Enter a password"
                variant="outlined"
                name="password"
                type="password"
                // value={formData.password}
                // onChange={handleInputChange}
                // error={Boolean(errors.password)}
                // helperText={errors.password}
              />

              <Button
                sx={{
                  marginBottom: "-20px",
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
                Sign Up
              </Button>
            </Box>
        </>
    )
}

export default BasicInformationDetails