import React, { useEffect} from "react";
import StyledComponent from "./Header.styled";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store";
import {GetCategories} from "../../actions/Categories/CategoriesAction";
import {CategoriesType} from "../../actions/Categories/CategoriesActionsType";
import {Link} from "react-router-dom";


const Header: React.FC = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state: RootState) =>state.categories.categories)

    useEffect(()=>{
        dispatch(GetCategories())
    },[])

    return (
        <StyledComponent>
            <nav className="navbar">
                <div className="logo">NWSLUB</div>
                <ul className="nav-links">
                    <div className="menu">
                        <li><a href="/">Home</a></li>
                        <li className="services">
                            <a href="/">Categories</a>
                            <ul className="dropdown">
                                {categories?.map((item: CategoriesType)=>(
                                    <li key={item.id}>
                                        <Link
                                            id={item.id}
                                            to={`/?categoryId=${item.id}`}
                                        >{`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}</Link>
                                </li>
                                ))}
                            </ul>
                        </li>

                    </div>
                </ul>
            </nav>
        </StyledComponent>
    )
}

export default Header