import MainLayout from './layouts/MainLayout';
import './App.scss';

function App() {
    return (
        <MainLayout
            Sidebar={<div>Sidebar</div>}
            View={<div>View</div>}
            Playbar={<div>Playbar</div>}
        />
    );
}
export default App;
