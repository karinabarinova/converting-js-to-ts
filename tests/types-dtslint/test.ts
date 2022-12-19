import {assertIsTypedArray, ITeam} from '.'

const team1: ITeam = null; // $ExpectError
const team2: ITeam = {
    channels: [],
    iconUrl: '',
    id: '',
    name: ''
}; // $ExpectError

