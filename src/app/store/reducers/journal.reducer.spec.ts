import { JournalState } from '../state/journal-state.model';
import { createNewEntry, cancelNewEntry, saveNewEntry } from '../actions/journal.actions';
import { JOURNAL_INITIAL_MOCK_STATE } from '../state/journal-initial-mock-state';
import { journalReducer } from './journal.reducer';

describe('Journal Reducer', () => {
    it('should set the showEntries key to false on `createNewEntry`', () => {
        const action = createNewEntry();
        const expected: JournalState = {
            ...JOURNAL_INITIAL_MOCK_STATE,
            showEntries: false,
        };

        const actual = journalReducer(JOURNAL_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});

describe('Journal Reducer', () => {
    it('should set the showEntries key to true on `cancelNewEntry`', () => {
        const action = cancelNewEntry();
        const expected: JournalState = {
            ...JOURNAL_INITIAL_MOCK_STATE,
            showEntries: true,
        };

        const actual = journalReducer(JOURNAL_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});