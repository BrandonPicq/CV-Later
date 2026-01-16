<?php

require 'vendor/autoload.php';

use Dompdf\Dompdf;

$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);


if (empty($data['identite']['firstName'])) {
    echo json_encode(['error' => 'First name is required']);
    exit;
}

if (empty($data['identite']['lastName'])) {
    echo json_encode(['error' => 'Last name is required']);
    exit;
}

if (empty($data['identite']['email'])) {
    echo json_encode(['error' => 'Email is required']);
    exit;
}

if (empty($data['identite']['phone'])) {
    echo json_encode(['error' => 'Phone is required']);
    exit;
}

if (!is_array($data['pastWork']) || count($data['pastWork']) === 0) {
    echo json_encode(['error' => 'At least one past work entry is required']);
    exit;
}   

if (!is_array($data['education']) || count($data['education']) === 0) {
    echo json_encode(['error' => 'At least one education entry is required']);
    exit;
}

function sanitize($text) {
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}


$firstName = sanitize($data['identite']['firstName']);
$lastName = sanitize($data['identite']['lastName']);
$email = sanitize($data['identite']['email']);
$phone = sanitize($data['identite']['phone']);
$summary = sanitize($data['identite']['summary']);
$wantedTitle = sanitize($data['identite']['wantedTitle']);
foreach ($data['pastWork'] as &$work) {
    $work['jobTitle'] = sanitize($work['jobTitle']);
    $work['companyName'] = sanitize($work['companyName']);
    $work['jobStartDate'] = sanitize($work['jobStartDate']);
    $work['jobEndDate'] = sanitize($work['jobEndDate']);
    $work['jobDescription'] = sanitize($work['jobDescription']);
}
foreach ($data['education'] as &$edu) {
    $edu['degree'] = sanitize($edu['degree']);
    $edu['institution'] = sanitize($edu['institution']);
    $edu['institutionStartDate'] = sanitize($edu['institutionStartDate']);
    $edu['institutionEndDate'] = sanitize($edu['institutionEndDate']);
    $edu['educationDescription'] = sanitize($edu['educationDescription']);
}
foreach ($data['skills'] as &$skill) {
    $skill['skillName'] = sanitize($skill['skillName']);
    $skill['skillLevel'] = sanitize($skill['skillLevel']);
}  


ob_start();
include 'templates/cv-template.php';
$html = ob_get_clean();

$dompdf = new Dompdf();
$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();
$dompdf->stream('CV.pdf');
