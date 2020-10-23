import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Person from '@material-ui/icons/Person';
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '60vh',
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'major', label: 'Major', minWidth: 100 },
    // {
    //   id: 'density',
    //   label: 'Density',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toFixed(2),
    // },
  ];  
  const rows = props.data || []

  const { t, i18n } = useTranslation()

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {t(column.label)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const isNameCol = column.id === 'name'
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {isNameCol && <PersonIcon status_code={row.st_code} />}
                        {isNameCol && i18n.language === 'ar' ? row.ar_name : t(value) }
                        {/* {column.format && typeof value === 'number' ? column.format(value) : t(value)} */}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={t('Rows per page')+':'}
      />
    </Paper>
  );
}


function PersonIcon ({ status_code }) {
  const style = {
    color: {
      'ur': 'orange',
      'ia': 'lightgreen',
      'ca': 'lightgreen',
      'r': 'lightcoral'
    }[status_code],
    // fontSize: 20
    marginRight: 10
  }
  return <Person style={style}/>
}
