import { React, Component } from 'react'
import TableComp from '../../components/Table/Table2'
import { Container, Grid, Typography, FormControl, FormGroup, Button } from '@material-ui/core';
import './Actor.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import Paper from '@material-ui/core/Paper';
import Axios from "../../services/axios-instance";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actors: [],
            actorId: "",
            firstName: "",
            lastName: "",
            button: "simpan",
            editIdx: -1,
            headCells: [
                { id: 'actorId', numeric: true, disablePadding: false, label: 'Actor Id' },
                { id: 'firstName', numeric: false, disablePadding: true, label: 'First Name' },
                { id: 'lastName', numeric: false, disablePadding: true, label: 'Last Name' },
                { id: 'lastUpdate', numeric: false, disablePadding: true, label: 'Last Update' },
                { id: 'actions', numeric: false, disablePadding: true, label: 'Actions' },
            ],
        }

        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.findActor();
    }

    findActor() {
        Axios.get("actor").then((response) => {
            console.log(response);
            this.setState({
                actors: response.data
            })
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleRemove = () => {
        const provinsi = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        console.log(provinsi)
    }

    startEditing = (i) => {
        console.log(i)
        Axios.get("actor/id/" + i).then((response) => {
            console.log(response);
            this.setState({
                actorId: response.data.actorId,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            })
        })
        this.setState({
            editIdx: i,
        })
    }
    stopEditing = (i) => {
        this.setState({
            editIdx: -1
        })
    }
    render() {
        const useStyles = makeStyles((theme) => ({
            card: {
                width: 500,
                maxWidth: 300,
                margin: "auto",
                transition: "0.3s",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                "&:hover": {
                    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
                }
            },
        }));
        // function createData(col1, col2, col3, carbs, protein) {
        //     return { col1, col2, col3, carbs, protein };
        // }
        // const rows = [
        //     createData('Cupcake', 305, 3.7, 67, 4.3),
        //     createData('Donut', 452, 25.0, 51, 4.9),
        //     createData('Eclair', 262, 16.0, 24, 6.0),
        //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        //     createData('Gingerbread', 356, 16.0, 49, 3.9),
        //     createData('Honeycomb', 408, 3.2, 87, 6.5),
        //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        //     createData('Jelly Bean', 375, 0.0, 94, 0.0),
        //     createData('KitKat', 518, 26.0, 65, 7.0),
        //     createData('Lollipop', 392, 0.2, 98, 0.0),
        //     createData('Marshmallow', 318, 0, 81, 2.0),
        //     createData('Nougat', 360, 19.0, 9, 37.0),
        //     createData('Oreo', 437, 18.0, 63, 4.0),
        // ];

        return (
            <>
                <Grid container className="section">
                    <Grid item className="section_title" xs={12}>
                        <Typography variant='h6'>Actor Page</Typography>
                    </Grid>
                </Grid>
                <br />
                <Grid container className="">
                    <Typography style={{ alignItems: 'center' }}>Form</Typography>
                    <br />
                    <Paper style={{ padding: 16, width: '100%', }}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={6}>
                                <TextField style={{width: '100%', }} id="standard-basic" label="First Name" value={this.state.firstName} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField style={{width: '100%', }} id="standard-basic" label="Last Name" value={this.state.lastName} />
                            </Grid>
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    type="button"
                                    variant="contained"
                                    onClick=""
                                    disabled=""
                                >
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled=""
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <br />
                <Grid container className="">
                    <Typography style={{ alignItems: 'center' }}>List Actor</Typography>
                    <br />
                    <TableComp
                        rows={this.state.actors}
                        headCells={this.state.headCells}
                        handleRemove={this.handleRemove}
                        startEditing={this.startEditing}
                        formData="actor"
                    />
                </Grid>

            </>
        )
    }
}

export default Index
