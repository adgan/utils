function testBreakCondition (outcome, wd, event) {
    let condition = undefined;

    condition = outcome !== 'success' && !(wd === 'dev' && event !== 'dispatch');
    return {
        outcome,
        wd,
        event,
        wouldThrowError: condition
    }
}

function testBreakConditionTFApply (ref, wd, event) {
    let condition = undefined;
    condition = ref === 'main' || ( wd === 'dev' && event === 'workflow_dispatch')

    return {
        ref,
        wd,
        event,
        ifResult: condition
    }
}
function testBreakConditionNotifyTeams (outcome, ref) {
    let condition = undefined;
    condition = outcome !== 'success' && ref === 'main'

    return {
        outcome,
        ref,
        ifResult: condition
    }
}



// console.table({
//     1: testBreakCondition('success', 'dev', 'dispatch'),
//     2: testBreakCondition('success', 'dev', 'normal'),
//     3: testBreakCondition('success', 'test', 'dispatch'),
//     4: testBreakCondition('success', 'test', 'normal'),
//
//     5: testBreakCondition('fail', 'dev', 'dispatch'),
//     6: testBreakCondition('fail', 'dev', 'normal'),
//     7: testBreakCondition('fail', 'test', 'dispatch'),
//     8: testBreakCondition('fail', 'test', 'normal')
// })

// console.table({
//     1: testBreakConditionTFApply('main', 'dev', 'workflow_dispatch'),
//     2: testBreakConditionTFApply('main', 'dev', 'normal'),
//     3: testBreakConditionTFApply('main', 'test', 'workflow_dispatch'),
//     4: testBreakConditionTFApply('main', 'test', 'normal'),
//
//     5: testBreakConditionTFApply('feature', 'dev', 'workflow_dispatch'),
//     6: testBreakConditionTFApply('feature', 'dev', 'normal'),
//     7: testBreakConditionTFApply('feature', 'test', 'workflow_dispatch'),
//     8: testBreakConditionTFApply('feature', 'test', 'normal')
// })

console.table({
    1: testBreakConditionNotifyTeams('success', 'main'),
    3: testBreakConditionNotifyTeams('failure', 'main'),

    5: testBreakConditionNotifyTeams('success', 'feature'),
    7: testBreakConditionNotifyTeams('failure', 'feature'),
})