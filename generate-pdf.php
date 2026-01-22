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
foreach ($data['pastWork'] as $key => $work) {
    $data['pastWork'][$key]['jobTitle'] = sanitize($work['jobTitle']);
    $data['pastWork'][$key]['companyName'] = sanitize($work['companyName']);
    $data['pastWork'][$key]['jobStartDate'] = sanitize($work['jobStartDate']);
    $data['pastWork'][$key]['jobEndDate'] = sanitize($work['jobEndDate']);
    $data['pastWork'][$key]['jobDescription'] = sanitize($work['jobDescription']);
}
foreach ($data['education'] as $key => $edu) {
    $data['education'][$key]['degree'] = sanitize($edu['degree']);
    $data['education'][$key]['institution'] = sanitize($edu['institution']);
    $data['education'][$key]['institutionStartDate'] = sanitize($edu['institutionStartDate']);
    $data['education'][$key]['institutionEndDate'] = sanitize($edu['institutionEndDate']);
    $data['education'][$key]['educationDescription'] = sanitize($edu['educationDescription']);
}
foreach ($data['skills'] as $key => $skill) {
    $data['skills'][$key]['skillName'] = sanitize($skill['skillName']);
    $data['skills'][$key]['skillLevel'] = sanitize($skill['skillLevel']);
}  


ob_start();
include 'templates/cv-template.php';
$html = ob_get_clean();

$dompdf = new Dompdf();
$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();
$dompdf->stream('CV.pdf');
