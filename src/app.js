import {FilterPanel} from 'components/filter-panel';
import {JobList} from 'components/job-list';
import {TheHeader} from 'components/the-header';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import data from './mock/data.json';
import {addPositions} from "./store/positions/position-actions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addPositions(data))
    });
    return (
        <>
            <TheHeader/>
            <div className='container'>
                <FilterPanel/>
                <JobList/>
            </div>
        </>
    );
}

export default App;
