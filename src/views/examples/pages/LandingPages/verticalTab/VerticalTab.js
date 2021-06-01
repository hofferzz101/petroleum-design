
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Space } from 'antd';
import "./VerticalTab.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    alignItems:"center"
  },
  tabs: {
    borderLeft: `3px solid ${'orange'}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        TabIndicatorProps={{style: {backgroundColor: "white"}}}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab className="tabText" style={{fontSize:"20px"}} label="We Are Innovative" {...a11yProps(0)} />
        <Tab className="tabText" style={{fontSize:"20px"}} label="We Develop And Transform" {...a11yProps(1)} />
        <Tab className="tabText" style={{fontSize:"20px"}} label="We Are Trade Experts" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <div style={{width:"600px"}}>
        <h3 style={{color:"darkgray",fontWeight:"lighter"}}>To meet the energy needs, we continually innovate to produce sustainable and responsible solutions in oil and gas, solar energy, and bioenergies. Our professionals work to provide the best services to our clients, partners and investors. They all have years of professional experience and high expertise in gas and oil industry.</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{width:"600px"}}>
        <h3 style={{color:"darkgray",fontWeight:"lighter"}}>We do so much more to improve your daily life. Our industrial expertise in transforming oil and gas helps to produce a wide range of everyday items. To verify the impact of the training, an assessment is repeated and compared to the initial assessment. We analyze gas sector to identify, assess and capture employee competencies.</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{width:"600px"}}>
        <h3 style={{color:"darkgray",fontWeight:"lighter"}}>We bring energy from producing regions all the way to consumer hubs, working across a long, complex logistics chain. </h3>
        <h3 style={{color:"darkgray",fontWeight:"lighter"}}>Our company is a leading provider of Testing and Inspection services for all markets within the Oil, Gas & Chemicals industry.</h3>
        </div>
      </TabPanel>
      
    </div>
  );
}