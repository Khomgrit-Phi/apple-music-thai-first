import React from 'react'

/**
 * ErrorBoundary - Catches errors in child components and displays a fallback UI
 * Prevents the entire app from crashing due to component errors
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
    // Log to console for debugging in development
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100dvh',
            padding: '20px',
            background: '#f5f5f7',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '12px',
              color: '#1D1D1F',
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 0.55)',
              marginBottom: '24px',
              textAlign: 'center',
              maxWidth: '300px',
            }}
          >
            {this.state.error?.toString() || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null, errorInfo: null })
              window.location.reload()
            }}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              background: '#FA233B',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Reload App
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
