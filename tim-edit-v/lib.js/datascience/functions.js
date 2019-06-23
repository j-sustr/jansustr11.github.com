export function precisionRecallF1(truePositives, falsePositives, falseNegatives) {
    // (true_positives + false_positives) = num. predicted as positive
    // (true_positives + false_negatives) = num. actual positive
    let P = truePositives / (truePositives + falsePositives)
    let R = truePositives / (truePositives + falseNegatives)
    let F1_Score = 2 * P * R / (P + R)
    return { precision: P, recall: R, f1Score: F1_Score }
}