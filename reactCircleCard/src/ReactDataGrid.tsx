import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';

import * as React from "react";
import { useState } from 'react';



function App() {
    const [columns] =useState( [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' }
      ]);
      
      const [rows] = useState( [
        { id: 0, title: 'Example' },
        { id: 1, title: 'Demo' }
      ]);
  return <DataGrid columns={columns} rows={rows} />;
}

export default App