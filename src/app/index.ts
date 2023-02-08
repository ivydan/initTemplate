import * as React from 'react'
import styles from './index.module.less'

interface IAppProps {
}
interface IAppState {
	selectInfo: any;
}

class App extends React.Component<IAppProps, IAppState> {
	state: IAppState = {
		selectInfo: {}
	}

	componentDidMount() { }

	render() {
		return <div className={ styles.App }>

			</div>
	}
}
export default App
