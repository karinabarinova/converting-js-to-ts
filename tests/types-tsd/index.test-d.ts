import {ITeam, } from '../../src/types'
import {expectAssignable, expectNotAssignable} from 'tsd'

expectNotAssignable<ITeam>( null )
expectAssignable<ITeam>( {
    channels: [],
    iconUrl: '',
    id: '',
    name: ''
} )

