import * as React from 'react';
import styles from './header.module.css';

export interface HeaderProps {

}

export interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        // this.state = {  };
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <header className={styles.mainHeader}>
                <div className={styles.innerHeaderContainer}>
                    <div className={styles.overlay}>
                    <div className={styles.headerTitle}>Nacionalni parkovi Hrvatske</div>
                    <div className={styles.headerText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</div>
                    </div>
                </div>
        
                
                <nav id="navigation" className={styles.primaryNavigation}>
                    <ul>
                        <li><a href="#">Početna</a></li>
                        <li><a href="#">Nacionalni parkovi</a>
                            <ul className="dropdown">
                                <li><a href="#">NP Brijuni</a></li>
                                <li><a href="#">NP Krka</a></li>
                                <li><a href="#">NP Paklenica</a></li>
                                <li><a href="#">NP Plitvička jezera</a></li>
                                <li><a href="#">NP Kornati</a></li>
                                <li><a href="#">NP Mljet</a></li>
                                <li><a href="#">NP Risnjak</a></li>
                                <li><a href="#">NP Sjeverni Velebit</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Komentari</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;