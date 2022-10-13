import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/logo.svg';
import { Wrapper, Logo, Header } from './Style';
import { actions } from './slice';
import { selectCounter, selectHello } from './slice/selectors';

const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);
    const hello = useSelector(selectHello);
    useEffect(() => {
        setInterval(() => dispatch(actions.changeCounter(performance.now().toFixed(0))), 100);
    }, []);

    return (
        <Wrapper>
            <Header>
                <Logo src={logo} alt="logo" />
                <div>
                    <div code>{hello}</div>
                </div>
                <div>
                    <div code>{counter}</div>
                </div>
            </Header>
        </Wrapper>
    );
};

export default App;
