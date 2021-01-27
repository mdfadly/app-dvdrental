import { React, Component } from 'react'
import TableComp from '../../components/Table/Table2'
import { Container, Grid, Typography } from '@material-ui/core';
import './Film.css'

class Film extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actors: [],
            actorId: "",
            firstName: "",
            lastName: "",
            button: "simpan",
            editIdx: -1,
            columns: [
                {
                    name: 'Actor Id', prop: 'actorId'
                },
                {
                    name: 'First Name', prop: 'firstName'
                },
                {
                    name: 'Last Name', prop: 'lastName'
                },
                {
                    name: 'Last Update', prop: 'lastUpdate'
                }
            ]
        }

        // this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
    }
    render() {
        function createData(name, calories, fat, carbs, protein) {
            return { name, calories, fat, carbs, protein };
        }
        const rows = [
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Donut', 452, 25.0, 51, 4.9),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
            createData('Honeycomb', 408, 3.2, 87, 6.5),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Jelly Bean', 375, 0.0, 94, 0.0),
            createData('KitKat', 518, 26.0, 65, 7.0),
            createData('Lollipop', 392, 0.2, 98, 0.0),
            createData('Marshmallow', 318, 0, 81, 2.0),
            createData('Nougat', 360, 19.0, 9, 37.0),
            createData('Oreo', 437, 18.0, 63, 4.0),
        ];
        const headCells = [
            { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
            { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
            { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
            { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
            { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
            { id: 'actions', numeric: false, disablePadding: true, label: 'Actions' },
        ];
        return (
            <>
                <Grid container className="section">
                    <Grid item className="section_title" xs={12}>
                        <span></span>
                        <Typography variant='h6'>Film Page</Typography>
                    </Grid>
                </Grid>
                <Grid container className="">
                    
                </Grid>
                <Grid container className="">
                    <TableComp
                        rows={rows}
                        headCells={headCells}
                    />
                </Grid>
            </>
        )
    }
}

export default Film
