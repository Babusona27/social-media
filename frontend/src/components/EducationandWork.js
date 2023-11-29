import { Box, Button, FormControlLabel, TextField, Typography, } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { MenuBook } from '@mui/icons-material'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';
import WorkIcon from '@mui/icons-material/Work';

const EducationandWork = () => {
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
          <MenuBook sx={{
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
            My education
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
            placeholder="Harvard Unversity"
            variant="outlined"
            name="name"
            size="small"
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
          <TextareaAutosize minRows={3} aria-label="empty textarea" placeholder="Description" />
          <Box sx={{
            display: "flex",
            alignItems: "center",
          }}>

            <Typography sx={{
              fontSize: "15px",
              fontWeight: "400",
              color: theme.palette.primary.ParaColor,
              textAlign: "left",
              marginRight: "10px",
            }} component={"p"}>Graduated?:-</Typography>
            <FormControlLabel sx={{
              padding: "0",
              marginLeft: "0px",
            }} size="small" control={<Checkbox sx={{
              padding: "0",
              marginLeft: "0px",
            }} />} />
            <Typography sx={{
              fontSize: "15px",
              fontWeight: "400",
              color: theme.palette.primary.ParaColor,
            }} component={"p"}>Yes!!</Typography>
          </Box>
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
      </Box>
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
            placeholder="Company"
            variant="outlined"
            name="name"
            size="small"
          />
          <TextField
            sx={{
              padding: "0",

            }}
            className="profile_input"
            fullWidth
            placeholder="Designation"
            variant="outlined"
            name="name"
            size="small"
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