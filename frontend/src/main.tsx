import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import App from './App.tsx'
import './index.css'

// Configure Ant Design theme
const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 6,
  },
  components: {
    Layout: {
      headerBg: '#fff',
    },
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)

