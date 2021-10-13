import React from 'react';
import { HeroCards } from './HeroCards/HeroCards';
import { Container, Col, Row } from 'react-bootstrap';
import { heroService } from '../../services/HeroServices';
import { SearchBar } from './SearchBar/SearchBar';
import { MyTeam } from './MyTeam/MyTeam';
import { storageService } from '../../services/StorageService';
import { Header } from '../Header/Header';
import style from './MainPage.module.css';
import { Loader } from '../Loader/Loader';


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            myTeam: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const storedValue = storageService.get("myTeam");
        storedValue && this.setState({ myTeam: storedValue })
        heroService.getCharacters()
            .then(response => this.setState({ heroes: response }))
            .finally(() => this.setState({ isLoading: false }))
    }

    searchHeroes = (text) => {
        heroService.searchCharacters(text)
            .then(response => this.setState({ heroes: response }))
    }

    addToMyTeam = (id) => {
        const heroTeam = this.state.myTeam.find(hero => hero.id === id)
        if (heroTeam) {
            return
        }
        let team = this.state.heroes.filter(hero => hero.id === id)
        let myTeam = [...this.state.myTeam, ...team]
        this.setState({ myTeam })
        storageService.set("myTeam", myTeam)
    }

    removeFromMyTeam = (id) => {
        const myTeam = this.state.myTeam.filter(hero => hero.id !== id)
        this.setState({ myTeam })
        storageService.set("myTeam", myTeam)
    }

    render() {
        // if (this.state.isLoading) {
        //     return <Loader />
        // }
        return (
            <>
                <Header />
                {this.state.isLoading
                    ? <Loader />
                    : <Container fluid>
                        <Row>
                            <Col lg={9}>
                                <SearchBar searchHeroes={this.searchHeroes} />
                                <HeroCards heroes={this.state.heroes} addToMyTeam={this.addToMyTeam} />
                            </Col>
                            <Col lg={3} className={style.margin}>
                                <h4 className={`${style.boldItalic} text-center`}>My Team of Heroes</h4>
                                <MyTeam myTeam={this.state.myTeam} removeFromMyTeam={this.removeFromMyTeam} />
                            </Col>
                        </Row>
                    </Container>
                }
            </>
        )
    }
}

export { MainPage }