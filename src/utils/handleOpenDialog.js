const handleOpenDialog = (dialogSetState, setSelectedRow, selectedRow) => {
  if (selectedRow) {
    setSelectedRow(selectedRow)
  }

  dialogSetState(true)
}

export default handleOpenDialog
