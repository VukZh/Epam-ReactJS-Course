import React, {Dispatch, useEffect} from "react";
import './styles.scss';
import {MoviesAction, MoviesActionTypes, MoviesState} from "../../store/types";
import {connect, ConnectedProps, TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {GetMovies} from "../../store/actionCreators/movies";
import makeUrl from "../../utils/makeUrl";

const Sorting: React.FC<SortingProps> = ({setSortingField}) => {

    const useSelector: TypedUseSelectorHook<MoviesState> = useReduxSelector;
    const data = useSelector(state => state);
    console.log("store", data)

    const {sortingField, genres} = useTypedSelector(state => state.movies);
    const dispatch = useTypedDispatch();

    console.log("sortingField", sortingField, makeUrl(sortingField, genres));

    useEffect(() => {
        dispatch(GetMovies());
    }, [sortingField])

    const handle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortingField(e.target.value);
    }

    return (
        <div className="sortingcontainer">
            <div className="sortingcontainer--text">SORT BY</div>
            <select className="sortingcontainer--select" onChange={handle}>
                <option className="sortingcontainer--select--option" value="" selected={sortingField === ""}>no sorting</option>
                <option className="sortingcontainer--select--option" value="release_date" selected={sortingField === "release_date"}>Release date</option>
                <option className="sortingcontainer--select--option" value="title" selected={sortingField === "title"}>Title</option>
                <option className="sortingcontainer--select--option" value="vote_average" selected={sortingField === "vote_average"}>Rating</option>
            </select>
        </div>
    );
}

const mapStateToProps = (state: MoviesState) => (
    {
        selectedField: state.sortingField
    }
)

const mapDispatchToProps = (dispatch: Dispatch<MoviesAction>) => {
    return {
        setSortingField: (field: string) =>
            dispatch({
                type: MoviesActionTypes.SET_SORTING_FIELDS,
                payload: field
            }),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type SortingProps = ConnectedProps<typeof connector>

export default connector(Sorting)
