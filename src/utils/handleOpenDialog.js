const handleOpenDialog = (dialogSetState, setSelectedRow, selectedRow) => {
  if (selectedRow) {
    setSelectedRow()

    setSelectedRow(selectedRow)
  }

  dialogSetState(true)
}

export default handleOpenDialog
