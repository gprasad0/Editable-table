import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn
} from "@devexpress/dx-react-grid-material-ui";
import * as actions from "./actions";

const getRowId = row => row.id;

export default class DemoTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "name", title: "Name" },
        { name: "age", title: "Age" },
        { name: "city", title: "City" },
        { name: "car", title: "Car" }
      ],
      rows: []
    };
  }

  async componentDidMount() {
    //getting initial data for tables
    const getDemoData = await actions.getDemoData().catch(e => console.log(e));
    // console.log("============> ", getNcrData)
    this.setState({ rows: getDemoData });
  }

  commitChanges = async ({ added, changed, deleted }) => {
    let { rows } = this.state;
    //adding new row
    if (added) {
      const status = await actions.addDemoData(added[0]);
      if (status.data === true) {
        this.componentDidMount();
      }
      console.log("first==================", added[0]);
    }
    //editing or updating tow
    if (changed) {
      let edit_id = 0;
      rows = rows.map(row => (changed[row.id] ? (edit_id = row.id) : row));
      if (edit_id !== 0) {
        const editDemoData = await actions
          .editDemoData(edit_id, changed[edit_id])
          .catch(e => console.log(e));
        if (editDemoData.status === true) {
          this.componentDidMount();
        }
      }
    }
    //row delition
    if (deleted) {
      if (deleted) {
        const deleteDemoData = await actions
          .deleteDemoData(deleted[0])
          .catch(e => console.log(e));
        if (deleteDemoData.status === true) {
          this.componentDidMount();
        }
      }
    }
  };

  render() {
    const { rows, columns } = this.state;

    return (
      <Paper>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState onCommitChanges={this.commitChanges} />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        </Grid>
      </Paper>
    );
  }
}
