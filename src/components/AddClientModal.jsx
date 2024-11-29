import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./AddClientModal.css";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
const AddClientModal = ({ onClose, onAddClient }) => {
  const [clientName1, setClientName1] = useState("");
  const [clientName2, setClientName2] = useState("");
  const [clientType, setClientType] = useState("Individual");
  const [pronouns, setPronouns] = useState("he");
  const [extraInfo, setExtraInfo] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [isHighRisk, setIsHighRisk] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [diagnosis, setDiagnosis] = React.useState(
    "F43.22 Adjustment disorder with anxiety"
  );
  const handleChange = (event) => {
    setDiagnosis(event.target.value);
  };
  const handleSubmit = () => {
    let hasError = false;
    if (!clientName1.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }
    if (hasError) return;
    const clientName =
      clientType === "Couple" ? `${clientName1} & ${clientName2}` : clientName1;
    const newClient = {
      clientName,
      clinicianName: "Dr. Placeholder",
      clientType,
      pronouns,
      extraInfo,
      birthYear: clientType === "Individual" ? birthYear : "N/A",
      isHighRisk,
      lastSession: "N/A",
      unsavedNotes: 0,
      treatmentPlan: "Saved",
    };
    onAddClient(newClient);
  };
  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal-container">
        <Box className="modal-content">
          <Box sx={{ textAlign: "end" }}>
            <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "20px",
            }}
            gutterBottom
          >
            Add New Client
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", fontSize: "14px", px: 6, mb: 3 }}
            gutterBottom
          >
            This client information is essential for generating detailed client
            documents
          </Typography>

          <Typography variant="subtitle1" className="label">
            Client type
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              value={clientType}
              onChange={(e) => setClientType(e.target.value)}
            >
              <FormControlLabel
                value="Individual"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#731054",
                      },
                    }}
                  />
                }
                label="Individual"
                className="individualLabel"
              />
              <FormControlLabel
                value="Couple"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#731054",
                      },
                    }}
                  />
                }
                label="Couple"
                className="coupleLabel"
              />
            </RadioGroup>
          </FormControl>

          {/* Client Name 1 */}
          <Typography
            className="label"
            variant="subtitle1"
            sx={{
              mt: 2,
            }}
          >
            Name <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            value={clientName1}
            onChange={(e) => setClientName1(e.target.value)}
            fullWidth
            size="small"
            error={nameError}
            helperText={nameError ? "Name is required" : ""}
            onFocus={() => setNameError(false)}
          />

          {/* Client Name 2 */}
          {clientType === "Couple" && (
            <>
              <Typography
                variant="subtitle1"
                className="label"
                sx={{
                  mt: 2,
                }}
              >
                Name 2 <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                value={clientName2}
                onChange={(e) => setClientName2(e.target.value)}
                fullWidth
                size="small"
              />
            </>
          )}

          {/* Pronouns Radio Buttons */}
          {clientType === "Individual" && (
            <>
              <Typography
                variant="subtitle1"
                className="label"
                sx={{
                  mt: 2,
                }}
              >
                Pronouns <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  value={pronouns}
                  onChange={(e) => setPronouns(e.target.value)}
                >
                  <FormControlLabel
                    value="he"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#731054",
                          },
                        }}
                      />
                    }
                    label="He"
                  />
                  <FormControlLabel
                    value="she"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#731054",
                          },
                        }}
                      />
                    }
                    label="She"
                  />
                  <FormControlLabel
                    value="they"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#731054",
                          },
                        }}
                      />
                    }
                    label="They"
                  />
                </RadioGroup>
              </FormControl>
            </>
          )}

          {clientType === "Individual" && (
            <>
              <Typography
                variant="subtitle1"
                className="label"
                sx={{
                  mt: 1,
                }}
              >
                {" "}
                Year of birth{" "}
              </Typography>
              <TextField
                type="text"
                placeholder="YYYY"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                size="small"
                fullWidth
              />
            </>
          )}

          <Box sx={{ minWidth: 120 }}>
            <Typography
              variant="subtitle1"
              className="label"
              sx={{
                mt: 2,
              }}
            >
              Diagnosis
            </Typography>
            <FormControl fullWidth margin="normal" sx={{ mt: 0 }}>
              <Select
                value={diagnosis}
                onChange={handleChange}
                inputProps={{ "aria-label": "Without label" }}
                displayEmpty
                MenuProps={{
                  PaperProps: {
                    elevation: 0,
                  },
                  disableScrollLock: true,
                }}
              >
                <MenuItem value={"F43.22 Adjustment disorder with anxiety"}>
                  <Typography>
                    F43.22 Adjustment disorder with anxiety
                  </Typography>
                </MenuItem>
                <MenuItem value={"F42.54 Anxiety"}>
                  <Typography>F42.54 Anxiety</Typography>
                </MenuItem>
                <MenuItem value={"F41.87 Disorder"}>
                  <Typography>F41.87 Disorder</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* High Risk Client Toggle */}
          <Box
            sx={{
              display: "flex",
              margin: "14px 0",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "14px",
              }}
            >
              High risk client
            </Typography>
            <Box>
              <IOSSwitch
                checked={isHighRisk}
                onChange={(e) => setIsHighRisk(e.target.checked)}
                color="primary"
              />
            </Box>
          </Box>

          {/* Extra Info */}
          <Typography variant="subtitle1" className="label">
            Extra notes
          </Typography>
          <TextField
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
            size="small"
            placeholder="Extra information about your client"
            fullWidth
          />

          {/* Modal Action Buttons */}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end" }}
            marginTop={2}
          >
            <Button
              onClick={handleSubmit}
              sx={{
                textTransform: "none",
                background: "#731054",
                fontWeight: 400,
              }}
              variant="contained"
              size="large"
              color="secondary"
            >
              Add client
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
export default AddClientModal;
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33CF4D",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));
